import { Github } from "lucide-react";
import Link from "next/link";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  cn,
} from "ui";

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative w-full pt-32 z-20">
        <div className="px-6 flex flex-col  gap-8 justify-center mx-auto md:w-[60%]">
          <p className="text-secondary text-3xl md:text-[48px] text-center font-bold leading-[1.2] w-[80%] mx-auto">
            How Track My Care helps and works for clinics !
          </p>
          <h1 className="text-center text-secondary font-thin md:text-xl w-[100%]">
            Healthcare clinics and providers can partner with TrackMyCare
            directly and provide patients with immediate access to clinic
            records such as treatment plans, referrals and prescriptions.
            Furthermore, patients can share their outside medical records with
            healthcare providers securely through an email link.
          </h1>
          <div className="flex justify-center">
            <Button variant={"secondary"} className="w-full max-w-[420px]">
              Try Track My Care
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <Card className={cn("w-[380px]")}>
          <CardHeader className="text-center">
            <CardTitle>Web Application</CardTitle>
            <CardDescription>NextJS Application</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Link
              href="https://github.com/godkingjay/turborepo-shadcn-starter"
              target="_blank"
            >
              <Button className="w-full">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
