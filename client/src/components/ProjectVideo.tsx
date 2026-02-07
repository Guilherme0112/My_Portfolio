import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

type Props = {
  videoUrl: string;
  title?: string;
};

export default function ProjectVideo({ videoUrl, title }: Props) {
  const isEmbed = videoUrl.includes("embed") || videoUrl.includes("youtube") || videoUrl.includes("vimeo");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
        >
          <ExternalLink size={16} />
          Vídeo
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-5xl w-full sm:max-w-4xl">
        <div className="flex items-center justify-between">
          <DialogTitle>{title ?? "Vídeo do Projeto"}</DialogTitle>
        </div>
        <DialogDescription />

        <div className="mt-4">
          {videoUrl ? (
            isEmbed ? (
              <div className="w-full">
                <iframe
                  src={videoUrl}
                  title={title ?? "project-video"}
                  className="w-full h-[70vh] rounded-md"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <video controls className="w-full h-[70vh] rounded-md">
                <source src={videoUrl} />
                Seu navegador não suporta reprodução de vídeo.
              </video>
            )
          ) : (
            <p className="text-sm text-muted-foreground">Nenhum vídeo disponível.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
