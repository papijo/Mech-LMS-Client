"use client";

import { LoginSchema } from "@/utils/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const LoginForm = () => {
  // Define Form
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //   SUbmit Handler
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <div className="flex flex-col justify-center items-center h-[100vh] w-full">
        <h1 className="mb-10 text-2xl">Welcome to the Aurora AI Powered LMS</h1>
        <form
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[50%] flex flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="joe.ebh100@email.com" {...field} />
                </FormControl>
                {/* <FormDescription>Enter your email</FormDescription>s */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="**********" {...field} />
                </FormControl>
                {/* <FormDescription>Enter your email</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="h-10 font-boldtext-2xl" type="submit">
            Login
          </Button>

          <div className="mt-5  w-full flex justify-end">
            <Link href="/" className="text-sm">
              Forgot Password
            </Link>
          </div>
        </form>
      </div>
    </Form>
  );
};
