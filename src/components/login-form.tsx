import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom'
import { Spinner } from "./ui/spinner"

interface LoginFormProps extends React.ComponentPropsWithoutRef<"form"> {
  handleLoginWithGoogle:any;
  email:string;
  setEmail: any;
  password: string;
  setPassword: any;
  handleSignin:any;
  loading: boolean;
}

export function LoginForm({
  className,
  handleLoginWithGoogle,
  email,
  setEmail,
  password,
  setPassword,
  handleSignin,
  loading,
  ...props
}: LoginFormProps) {
  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSignin} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              to="/forgot-password"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full" disabled={!email || !password || loading}>
          {(loading)?<Spinner variant="circle"/>
          :"Login"}
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to={'/signup'} className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  )
}