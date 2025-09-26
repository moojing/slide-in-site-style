import { useEffect, useMemo, useState } from "react";
import { getRegions, setRegions } from "@/data/profiles";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";

const RegionsAdminPage = () => {
  const [items, setItems] = useState<string[]>([]);
  const [draft, setDraft] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    setItems(getRegions());
  }, []);

  const canSave = useMemo(() => items.length > 0, [items]);

  const handleAdd = () => {
    const value = draft.trim();
    if (!value) return;
    if (items.includes(value)) {
      toast({ description: "Region already exists" });
      return;
    }
    setItems((prev) => [...prev, value]);
    setDraft("");
  };

  const handleDelete = (idx: number) => {
    setItems((prev) => prev.filter((_, i) => i !== idx));
    if (editingIndex === idx) setEditingIndex(null);
  };

  const handleEditStart = (idx: number) => {
    setEditingIndex(idx);
    setDraft(items[idx]);
  };

  const handleEditConfirm = () => {
    const value = draft.trim();
    if (!value) return;
    setItems((prev) => prev.map((r, i) => (i === editingIndex ? value : r)));
    setEditingIndex(null);
    setDraft("");
  };

  const handleSave = () => {
    setRegions(items);
    toast({ description: "Regions saved" });
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Manage Regions</h2>
          <p className="text-muted-foreground">Add, edit, or remove regions. Changes persist in your browser.</p>
        </div>

        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-2 md:gap-3 mb-4">
              <Input
                placeholder={editingIndex === null ? "Add new region" : "Edit region"}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />
              {editingIndex === null ? (
                <Button onClick={handleAdd}>Add</Button>
              ) : (
                <div className="flex gap-2">
                  <Button onClick={handleEditConfirm}>Update</Button>
                  <Button variant="outline" onClick={() => { setEditingIndex(null); setDraft(""); }}>Cancel</Button>
                </div>
              )}
            </div>

            <div className="mb-4">
              <Badge variant="secondary">{items.length} region{items.length !== 1 ? 's' : ''}</Badge>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="w-[180px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((r, i) => (
                  <TableRow key={r + i}>
                    <TableCell>{r}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleEditStart(i)}>Edit</Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(i)}>Delete</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {items.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={2} className="text-muted-foreground">No regions yet</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>

            <div className="mt-6">
              <Button disabled={!canSave} onClick={handleSave}>Save</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegionsAdminPage;


