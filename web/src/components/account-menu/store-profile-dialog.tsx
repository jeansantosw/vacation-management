import { Button } from "../ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function StoreProfileDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Atualizar Perfil</DialogTitle>
        <DialogDescription>Preencha corretamente os campos</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <form >
          <div className="space-y-4 py-4">
            <div className="flex flex-col gap-4">
              <Label className="" htmlFor="name">
                Nome
              </Label>
              <Input
                autoComplete="off"
                className=""
                id="name"
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label className="" htmlFor="description">
                Descrição
              </Label>

            </div>
          </div>
          <DialogFooter className="mt-3 gap-5">
            <DialogClose asChild>
              <Button className="cursor-pointer" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" variant="success" className="cursor-pointer">
              Salvar
            </Button>

          </DialogFooter>
        </form>
      </DialogFooter>
    </DialogContent>
  )
}