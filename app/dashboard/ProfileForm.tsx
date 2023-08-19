'use client';

export function ProfileForm({ user }: any) {

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    await res.json();
  };

  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600 text-black">
    <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-700">Edit Your Profile</h2>
      <form className="mt-6" onSubmit={updateUser}>
        <div>
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring" type="text" name="name" defaultValue={user?.name ?? ''} />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700" htmlFor="bio">Bio</label>
          <textarea className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring" name="bio" cols={30} rows={10} defaultValue={user?.bio ?? ''}></textarea>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700" htmlFor="age">Age</label>
          <input className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring" type="text" name="age" defaultValue={user?.age ?? 0} />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700" htmlFor="image">Profile Image URL</label>
          <input className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring" type="text" name="image" defaultValue={user?.image ?? ''} />
        </div>

        <button className="w-full px-4 py-2 mt-6 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring" type="submit">Save</button>
      </form>
    </div>
  </div>

  );
}