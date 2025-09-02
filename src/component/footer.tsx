export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Nakazain. All rights reserved.
        </p>
      </div>
    </footer>
  )
}