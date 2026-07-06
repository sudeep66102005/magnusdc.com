import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
}

export function LinkCard({ href, title, description, icon: Icon }: LinkCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:shadow-md">
        <CardHeader className="flex-row items-center gap-3">
          {Icon && (
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="size-5" />
            </span>
          )}
          <CardTitle className="text-base leading-snug">{title}</CardTitle>
        </CardHeader>
        {description && (
          <CardContent className="pt-0 text-sm text-slate-600">
            {description}
          </CardContent>
        )}
        <CardContent className="flex items-center gap-1 pt-0 text-sm font-medium text-primary">
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </CardContent>
      </Card>
    </Link>
  );
}
