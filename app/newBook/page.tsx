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

const formSchema = z.object({
  title: z.string(),
  author: z.string(),
  publisher: z.string(),
  year: z.number(),
  pages: z.number(),
});

type FormType = z.infer<typeof formSchema>;

export default function Page() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });
  function createNewBook() {
    console.log("Create new book not implemented!");
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
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Autor</FormLabel>
                    <FormControl>
                      <Input placeholder="Autor..." {...field} />
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
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Año de publicación</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Año de publicación..."
                        {...field}
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
                      <Input placeholder="Páginas..." {...field} />
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
