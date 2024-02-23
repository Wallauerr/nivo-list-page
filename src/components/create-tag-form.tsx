import { Check, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import * as Dialog from '@radix-ui/react-dialog'

const createTagSchema = z.object({
  name: z.string().min(3, { message: 'Minimum 3 characters' }),
  slug: z.string(),
})

type CreateTagSchema = z.infer<typeof createTagSchema>

export function CreateTagForm() {
  const { register, handleSubmit } = useForm<CreateTagSchema>({
    resolver: zodResolver(createTagSchema),
  })

  function createTag(data: CreateTagSchema) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(createTag)} className="w-full space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="name">
          Tag name
        </label>
        <input
          {...register('name')}
          className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm"
          id="name"
          type="text"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="slug">
          Slug
        </label>
        <input
          {...register('slug')}
          className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm"
          id="slug"
          type="text"
          readOnly
        />
      </div>

      <div className="flex items-center justify-end gap-2">
        <Dialog.Close asChild>
          <Button>
            <X className="size-3" />
            Cancel
          </Button>
        </Dialog.Close>
        <Button className="bg-teal-400 text-teal-950" type="submit">
          <Check className="size-3" />
          Save
        </Button>
      </div>
    </form>
  )
}
