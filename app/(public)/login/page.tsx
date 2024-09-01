import { GoogleIcon } from "@/assets/icons/google.icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter your email and password to sign in
        </p>
      </div>

      <div className="mt-10 w-full max-w-[480px]">
        <form className="flex flex-col gap-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="password"
              className="h-12"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              className="h-12"
              placeholder="*********"
            />
          </div>

          <div className="mt-8">
            <Button type="submit" className="h-12 w-full font-semibold">
              Sign in
            </Button>
          </div>
        </form>

        <div className="relative mt-8 flex items-center justify-center">
          <div className="absolute w-full">
            <Separator />
          </div>
          <span className="z-[1] bg-background px-6 text-xs text-muted-foreground">
            OR SIGN IN WITH
          </span>
        </div>

        <Button variant={"outline"} className="mt-8 h-12 w-full gap-x-2">
          <GoogleIcon />
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
