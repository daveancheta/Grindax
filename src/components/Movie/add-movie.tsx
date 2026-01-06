import { Plus } from "lucide-react"
import { Button } from "../ui/button"

function AddMovie() {
  return (
    <div>
        <Button className="mb-4">
            <Plus />
            Add Movie
        </Button>
    </div>
  )
}

export default AddMovie