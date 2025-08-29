export default function Card() {
  return (
    <div className="cursor-pointer bg-neutral-800 border border-primary w-80 group transition-all duration-300 hover:rounded-2xl hover:shadow-lg hover:shadow-accent hover:-translate-y-2 overflow-hidden">
      <div>
        <img className="h-48" src="/tes.jpg" alt="" />
      </div>
      <div className="m-4">
        <p className="text-2xl font-bold mb-2">Title</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia
          ratione quaerat quibusdam. In, odit sunt quam dolorum, cumque deleniti
          facilis cum, nisi temporibus aut placeat modi praesentium nam optio.
        </p>
      </div>
    </div>
  );
}
