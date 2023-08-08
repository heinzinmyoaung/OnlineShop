import { Form, useNavigation } from "react-router-dom";

const ProductForm = ({ categories }) => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  return (
    <Form method="post" className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="text-input">
          Title
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="text-input"
          name="title"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="text-input">
          Price
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          id="text-input"
          name="price"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="text-input">
          Description
        </label>
        <textarea
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="text-input"
          name="description"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="file-input">
          Image
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="file"
          id="file-input"
          name="image"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="select-input">
          Category
        </label>
        <select
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="select-input"
          name="selectCategory"
          required
        >
          <option value="" defaultValue="">
            Select Category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end">
        <button
          className="px-4 py-2 mr-2 text-black bg-gray-50 rounded-lg"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          disabled={isSubmitting}
          className="px-4 py-2 text-white bg-black rounded-lg"
        >
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
};
export default ProductForm;
