"use client";

import { Spinner } from "@/components/ui/spinner";
import { useFormStatus } from "react-dom";
import { GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signInWithGithub } from "../actions";
function SubmitButton() {
  const { pending } = useFormStatus();
  let buttonLabel = "Sign in with GitHub";
  let buttonIcon = <GitBranch className="mr-2 h-4 w-4" />;
  if (pending) {
    buttonLabel = "Redirecting to GitHub...";
    buttonIcon = <Spinner className="size-4" />;
  }
  return (
    <Button type="submit" className={"w-full"} size={"lg"} disabled={pending}>
      {buttonIcon}
      {buttonLabel}
    </Button>
  );
}
type GithubSignInFormProps = {
  /**Optional post-login redirect path (e.g. Github install callback) */
  callbackUrl?: string;
};
export function GithubSignInForm({ callbackUrl }: GithubSignInFormProps) {
  return (
    <form action={signInWithGithub} className="w-full">
      {callbackUrl ? (
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
      ) : null}
      <SubmitButton />
    </form>
  );
}
