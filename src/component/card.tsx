export default function Card() {
  return (
    <div className="relative cursor-pointer bg-neutral-800 border border-neutral-700 w-96 p-4 group transition-all duration-300 z-10 rounded-2xl hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
      <div>
        <img className="h-48 object-cover rounded-xl" src="/tes.jpg" alt="" />
      </div>
      <div className="mt-4">
        <p className="text-xl font-bold mb-2 text-center"> Project</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia
          ratione quaerat quibusdam. In, odit sunt quam dolorum, cumque deleniti
          facilis cum, nisi temporibus aut placeat modi praesentium nam optio.
        </p>
      </div>
    </div>
  );
}
