"use client";
import {
  FormProvider as Form,
  UseFormReturn,
  FieldValues,
} from "react-hook-form";

// ----------------------------------------------------------------------

type Props<T extends FieldValues> = {
  children: React.ReactNode;
  methods: UseFormReturn<T>;
  onSubmit?: VoidFunction;
};

export default function FormProvider<T extends FieldValues>({
  children,
  onSubmit,
  methods,
}: Props<T>) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
