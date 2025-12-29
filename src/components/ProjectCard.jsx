export default function ProjectCard({ title, description, image }) {
  return (
    <div className="bg-zinc-800 p-4 rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-2" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-300">{description}</p>
    </div>
  )
}
