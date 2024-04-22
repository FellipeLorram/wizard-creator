import Link from "next/link";
import { ListWizards } from "@/components/layout/list-wizards";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CirclePlusIcon } from "lucide-react";

export default function Home() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle data-test-id="cypress-card-title">
          Wizards
        </CardTitle>
        <Link
          data-test-id="cypress-create-wizard-button"
          className={buttonVariants()}
          href="/wizards/create"
        >
          <CirclePlusIcon className="w-4 h-4 mr-2" />
          Criar Wizard
        </Link>
      </CardHeader>
      <CardContent>
        <ListWizards />
      </CardContent>
    </Card>
  );
}
