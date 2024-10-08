"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BooksCreateInputSchema } from "@/prisma/generated/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormType = z.infer<typeof BooksCreateInputSchema>;

export default function Page() {
  const router = useRouter();

  const form = useForm<FormType>({
    resolver: zodResolver(BooksCreateInputSchema),
    defaultValues: {
      title: "",
      authorLastName: "",
      authorName: "",
      publisher: "",
      publishYear: 0,
      pages: 0,
    },
  });
  const [selectedCover, setSelectedCover] = useState<File | null>(null);

  function handleCoverChange(event: React.ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setSelectedCover(fileList[0]);
    }
  }
  async function createNewBook(formData: FormType) {
    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formDataToSend.append(key, value.toString()); // Convertir a string si es necesario
      }
    });

    if (selectedCover) {
      formDataToSend.append("cover", selectedCover);
    }

    const response = await fetch("/api/books/add", {
      method: "POST",
      body: formDataToSend,
    });

    if (!response.ok) {
      console.log(response);
      throw new Error("Failed to add book");
    }

    const book = await response.json();
    router.push(`/books/${book.bookId}`);
  }

  return (
    <main className="flex flex-col items-center p-4">
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
                  </FormItem>
                )}
              />
              <FormItem>
                <FormLabel>Portada del libro</FormLabel>
                <FormControl>
                  <input
                    id="cover"
                    type="file"
                    name="cover"
                    onChange={handleCoverChange}
                  />
                </FormControl>
                {selectedCover && (
                  <Image
                    className="mt-2"
                    src={URL.createObjectURL(selectedCover)}
                    alt="Cover Preview"
                    width={50}
                    height={50}
                  />
                )}
              </FormItem>

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
