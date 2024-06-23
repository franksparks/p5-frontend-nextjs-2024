"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { BooksCreateInputSchema } from "@/prisma/generated/zod";
import { actionAddBook } from "../actions/books";
import { useRouter } from "next/navigation";

type FormType = z.infer<typeof BooksCreateInputSchema>;

export default function Page() {
  const router = useRouter(); // Obtiene el router de Next.js

  const form = useForm<FormType>({
    resolver: zodResolver(BooksCreateInputSchema),
    defaultValues: {
      title: "",
      authorLastName: "",
      authorName: "",
      publisher: "",
      publishYear: 10,
      pages: 10,
    },
  });
  async function createNewBook(formData: FormType) {
    console.log(formData);
    const book = await actionAddBook(formData);
    console.log("Book added!");
    console.log(book);
    router.push(`/books/${book.bookId}`);
  }

  return (
    <main className="flex flex-col items-center p-8">
      <h1>Añade un libro</h1>
      <Card className="w-96">
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(createNewBook)}
              className="space-y-"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título</FormLabel>
                    <FormControl>
                      <Input placeholder="Título..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="authorLastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido del Autor</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Apellido del Autor..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="authorName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre del Autor</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nombre del Autor..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="publisher"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Editorial</FormLabel>
                    <FormControl>
                      <Input placeholder="Editorial..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="publishYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Año de publicación</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Año de publicación..."
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de páginas</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Número de páginas..."
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-4 flex flex-col items-center">
                <Button>Añadir</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
