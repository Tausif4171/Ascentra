"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  data?: any;
  editMode?: boolean;
};

export const TaskForm = ({ data, editMode }: Props) => {
  const [users, setUsers] = useState([]);
  console.log(data, users);
  const router = useRouter();
  const [formData, setFormData] = useState<any>({
    title: "",
    description: "",
    status: "Todo",
    progress: 0,
    priority: 1,
    department: "Development",
    assignedTo: "",
    // active: Boolean,
  });

  console.log({ formData });

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/user");
      const data = await res.json();
      setUsers(data.users);
    };

    fetchUsers();
    if (editMode) {
      setFormData({
        title: data.title,
        description: data.description,
        status: data.status,
        progress: data.progress,
        priority: data.priority,
        department: data.department,
        assignedTo: data.assignedTo,
      });
    }
  }, [editMode]);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createTask = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found");
      return;
    }

    const res = await fetch("/api/Task", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`, // Include the token in the header
      },
    });

    if (res) {
      router.refresh();
      router.push("/");
      return "Successfully created!";
    } else {
      return "Error in creating";
    }
  };

  const updateTask = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`/api/Task/${data._id}`, {
      method: "PUT",
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res) {
      router.refresh();
      router.push("/");
      return "Successfully updated!";
    } else {
      return "Error in updating";
    }
  };

  return (
    <div className="flex flex-col justify-center m-10">
      <h3 className="text-[#fff] font-semibold text-[24px] mb-4">
        {editMode ? "Update Task" : "Create Task"}
      </h3>

      <form
        className="flex flex-col"
        method="POST"
        onSubmit={editMode ? updateTask : createTask}
      >
        <label className="text-[#fff] font-medium text-[18px] mb-[6px]">
          Title
        </label>

        <input
          className=" rounded-lg p-2 mb-2"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
        />

        <label className="text-[#fff] font-medium text-[18px] mb-[6px]">
          Description
        </label>

        <textarea
          className=" rounded-lg p-2 mb-2"
          typeof="textarea"
          rows={4}
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label className="text-[#fff] font-medium text-[18px] mb-[6px]">
          Progress
        </label>

        <input
          className=" rounded-lg p-2 mb-2"
          type="range"
          min={0}
          max={100}
          name="progress"
          value={formData.progress}
          onChange={handleChange}
        />

        <label className="text-[#fff] font-medium text-[18px] mb-[6px]">
          Department
        </label>

        <select
          className=" rounded-lg p-2 mb-2"
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value={"Development"}>Development</option>

          <option value={"Design"}>Design</option>

          <option value={"QA"}>QA (Quality Assurance)</option>

          <option value={"Sales"}>Sales</option>
        </select>

        <label className="text-[#fff] font-medium text-[18px] mb-[6px]">
          Priority
        </label>

        <div className="mb-2">
          <input
            type="radio"
            name="priority"
            value={1}
            checked={formData.priority == 1}
            onChange={handleChange}
          />
          <label>1</label>

          <input
            type="radio"
            name="priority"
            value={"2"}
            checked={formData.priority == 2}
            onChange={handleChange}
          />
          <label>2</label>

          <input
            type="radio"
            name="priority"
            value={3}
            checked={formData.priority == 3}
            onChange={handleChange}
          />
          <label>3</label>

          <input
            type="radio"
            name="priority"
            value={4}
            checked={formData.priority == 4}
            onChange={handleChange}
          />
          <label>4</label>

          <input
            type="radio"
            name="priority"
            value={"5"}
            checked={formData.priority == 5}
            onChange={handleChange}
          />
          <label>5</label>
        </div>

        <label className="text-[#fff] font-medium text-[18px] mb-[6px]">
          Status
        </label>

        <select
          className=" rounded-lg p-2 mb-7"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value={"Todo"}>To Do</option>

          <option value={"Inprogress"}>In Progress</option>

          <option value={"InReviews"}>In Review</option>

          <option value={"On Hold"}>On Hold</option>

          <option value={"Completed"}>Completed</option>
        </select>

        <select
          name="assignedTo"
          value={formData.assignedTo}
          onChange={handleChange}
        >
          <option value="">Assign to</option>
          {users?.map((user: { _id: string; email: string }) => (
            <option key={user._id} value={user._id}>
              {user.email}
            </option>
          ))}
        </select>

        <button
          className=" uppercase text-[18px] w-40 mx-auto px-6 bg-black rounded-md flex justify-center items-center py-3 text-white font-bold"
          type="submit"
        >
          {editMode ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};
