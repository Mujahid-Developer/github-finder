import Loader from "./Assets/loading.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width={50}
        className="text-center mx-auto"
        src={Loader}
        alt="Loading..."
      />
    </div>
  );
};

export default Spinner;
