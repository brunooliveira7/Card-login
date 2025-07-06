import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

function App() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className="min-h-screen w-full grid place-items-center bg-background p-4">
      <Card className="w-full max-w-sm shadow-lg border bg-card">
        <CardHeader className="relative space-y-1">
          <CardTitle className="text-xl">Login to your account</CardTitle>
          <CardDescription className="text-muted-foreground max-w-[11rem] mr-[8rem]">
            Enter your email below to login to your account
          </CardDescription>
          <Button asChild variant="link" className="absolute top-8 right-6">
            <a href="#" className="text-primary">Sign Up</a>
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="bg-secondary/50"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm text-primary
                     underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    className="bg-secondary/50 pr-10"
                    required 
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-0 h-full px-3 py-2 flex 
                    items-center justify-center bg-transparent 
                    hover:bg-transparent focus:outline-none border-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Eye className="h-4 w-4 text-muted-foreground 
                      hover:text-foreground transition-colors" />
                    ) : (
                      <EyeOff className="h-4 w-4 text-muted-foreground 
                      hover:text-foreground transition-colors" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full bg-secondary/50 
          hover:bg-secondary/70">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}

export default App
