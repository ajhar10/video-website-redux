import { useDispatch, useSelector } from "react-redux";
import { pageSelected } from "../../features/filter/filterSlice";

export default function Pagination() {
  const { page } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handlePage = (page) => {
    dispatch(pageSelected(page));
  };

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        <div
          className={`${
            page === 1 ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
          } px-4 py-1 rounded-full cursor-pointer`}
          onClick={() => handlePage(1)}
        >
          1
        </div>
        <div
          className={`${
            page === 2 ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
          } px-4 py-1 rounded-full cursor-pointer`}
          onClick={() => handlePage(2)}
        >
          2
        </div>
        <div
          className={`${
            page === 3 ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
          } px-4 py-1 rounded-full cursor-pointer`}
          onClick={() => handlePage(3)}
        >
          3
        </div>
      </div>
    </section>
  );
}
