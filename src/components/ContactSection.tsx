import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiLine, SiTelegram } from "react-icons/si";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred channel below. We’re most responsive on LINE and
            will expand to Telegram shortly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* LINE */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "#C7F4D7" }}
              >
                <SiLine className="w-10 h-10 text-[#06C755]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground">LINE</h3>
                <p className="text-sm text-muted-foreground">
                  Fastest way to reach Holiday Friend support.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Tap the button below to open our official LINE link and send us a
              direct message.
            </p>

            <Button
              asChild
              size="lg"
              className="w-full bg-[#06C755] hover:bg-[#06C755]/90 text-white"
            >
              <a
                href="https://lin.ee/rfq1lAe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on LINE
              </a>
            </Button>
          </div>

          {/* Telegram */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "#CCE6FF" }}
              >
                <SiTelegram className="w-10 h-10 text-[#229ED9]" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-semibold text-card-foreground">
                    Telegram
                  </h3>
                  <Badge variant="secondary">Coming soon</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Telegram channel is being set up now.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              We’re reserving this space for our official Telegram handle. Check
              back soon for updates.
            </p>

            <Button variant="outline" size="lg" className="w-full" disabled>
              Telegram coming soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
