import { useState, type FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import * as stylex from "@stylexjs/stylex";
import { isDefinedError, type InferClientError } from "@orpc/client";
import { HStack } from "@astryxdesign/core/HStack";
import { VStack } from "@astryxdesign/core/VStack";
import { Banner } from "@astryxdesign/core/Banner";
import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { Link } from "@astryxdesign/core/Link";
import { Button } from "@astryxdesign/core/Button";
import { TextInput } from "@astryxdesign/core/TextInput";
import { Icon } from "@astryxdesign/core/Icon";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { orpc } from "../lib/orpc";

const styles = stylex.create({
  page: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100dvh",
    backgroundColor: "light-dark(var(--color-background-surface), var(--color-background-body))",
    "@media (min-width: 768px)": {
      flexDirection: "row-reverse",
    },
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--spacing-2)",
    padding: "var(--spacing-6)",
    "@media (min-width: 768px)": {
      width: "33%",
    },
  },
  formPane: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "var(--spacing-4)",
    "@media (min-width: 768px)": {
      width: "67%",
      borderInlineEndWidth: "var(--border-width)",
      borderInlineEndStyle: "solid",
      borderInlineEndColor: "var(--color-border)",
    },
  },
});

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation<
    Awaited<ReturnType<typeof orpc.auth.login>>,
    InferClientError<typeof orpc.auth.login>,
    { email: string; password: string }
  >({
    mutationFn: (input) => orpc.auth.login(input),
  });

  const handleSignIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div {...stylex.props(styles.page)}>
      <div {...stylex.props(styles.brand)}>
        <Icon icon={AcademicCapIcon} size="lg" />
        <Text type="body" weight="bold" size="lg">
          Project TARSIER
        </Text>
      </div>
      <div {...stylex.props(styles.formPane)}>
        <VStack gap={6} width="100%" maxWidth={400}>
          <VStack gap={1}>
            <Heading level={2}>
              Welcome back
            </Heading>
            <Text type="supporting" color="secondary" size="sm">
              Please sign in your account to continue
            </Text>
          </VStack>
          <form onSubmit={handleSignIn}>
            <VStack gap={6}>
              {loginMutation.isError && (
                <Banner
                  status="error"
                  container="card"
                  title={isDefinedError(loginMutation.error)
                    ? loginMutation.error.message
                    : "Something went wrong. Please try again."}
                />
              )}
              <VStack gap={4}>
                <TextInput
                  label="Email"
                  placeholder="employee@tesda.gov.ph"
                  type="email"
                  value={email}
                  onChange={(value) => {
                    setEmail(value);
                    loginMutation.reset();
                  }}
                  size="lg"
                  htmlName="email"
                  autoComplete="email"
                />
                <TextInput
                  label="Password"
                  placeholder="••••••••••••"
                  type="password"
                  value={password}
                  onChange={(value) => {
                    setPassword(value);
                    loginMutation.reset();
                  }}
                  size="lg"
                  htmlName="password"
                  autoComplete="current-password"
                />
                <HStack justify="between">
                  <Link href="#" size="sm" color="secondary">
                    Forgot password?
                  </Link>
                </HStack>
              </VStack>
              <Button
                label="Sign in"
                variant="primary"
                size="lg"
                width="100%"
                type="submit"
                isLoading={loginMutation.isPending}
              />
            </VStack>
          </form>
        </VStack>
      </div>
    </div>
  );
}
