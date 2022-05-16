interface nameProps {
  name: string
}

export const Card = ({ name }: nameProps) => {
  return (
    <div className="w-full h-full bg-sky-200 rounded-md p-4">
      <h1 className="text-lg font-medium">{name}</h1>
    </div>
  )
}