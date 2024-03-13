const About = () => {
  return (
    <div className=" flex items-center justify-center min-h-screen dark:bg-gray-900">
      <div className="max-w-4xl p-8 border-3 rounded-md bg-white dark:bg-gray-900 dark:text-gray-300">
        <h1 className="text-3xl font-bold mb-4 dark:gray-300">About Vet Guardian</h1>
        <p className="text-lg mb-4 dark:gray-300">This application is built as a MERN Stack that connects to a Python Flask endpoint, which is where the prediction based of an image of the user's pet is shown.</p>
        <ul className="list-disc list-inside dark:gray-300">
          <li className="text-lg mb-4">Frontend: React.js, Tailwind CSS</li>
          <li className="text-lg mb-4">Backend: Node.js, Express.js</li>
          <li className="text-lg mb-4">Database: MongoDB</li>
          <li className="text-lg mb-4">Machine Learning: Tensorflow hosted on Python Flask</li>
          </ul>
      </div>
    </div>
  )
}

export default About