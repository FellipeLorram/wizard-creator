import Link from "next/link";
import { CirclePlus, SlashIcon } from "lucide-react";
import { ListPages } from "@/components/layout/list-pages";
import { Wizard } from "@/components/layout/wizard";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  params: {
    id: string
  }
}

export default function Page({ params }: Props) {
  
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink>
              {params.id}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        <Wizard
          id={Number(params.id)}
        />

        <Card className="col-span-3">
          <CardHeader className="flex-row justify-between items-center">
            <CardTitle>
              Páginas
            </CardTitle>
            <Link
              className={buttonVariants()}
              href={`/wizards/${params.id}/add-page`}
            >
              <CirclePlus className="w-4 h-4 mr-2" />
              Adicionar página
            </Link>
          </CardHeader>
          <CardContent>
              <ListPages wizardId={Number(params.id)} />
          </CardContent>
        </Card>

      </div>
    </>
  )
}
