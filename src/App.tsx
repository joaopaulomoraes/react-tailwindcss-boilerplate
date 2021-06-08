const App = () => {
  return (
    <div className="flex flex-col justify-center py-6 sm:py-12 min-h-screen bg-gray-100">
      <div className="relative py-3 sm:mx-auto sm:max-w-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 sm:rounded-3xl shadow-lg transform sm:-rotate-6 -skew-y-6 sm:skew-y-0"></div>
        <div className="relative sm:p-20 py-10 px-4 bg-white sm:rounded-3xl shadow-lg">
          <div className="mx-auto max-w-md">
            <div>
              <img
                src="https://play.tailwindcss.com/img/logo.svg"
                className="h-7 sm:h-8"
              />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 space-y-4 text-base sm:text-lg leading-6 sm:leading-7 text-gray-700">
                <p>
                  An advanced online playground for Tailwind CSS, including
                  support for things like:
                </p>
                <ul className="space-y-2 list-disc">
                  <li className="flex items-start">
                    <span className="flex items-center h-6 sm:h-7">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">
                      Customizing your{' '}
                      <code className="text-sm font-bold text-gray-900">
                        tailwind.config.js
                      </code>{' '}
                      file
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center h-6 sm:h-7">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">
                      Extracting classes with
                      <code className="text-sm font-bold text-gray-900">
                        {' '}
                        @apply
                      </code>
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center h-6 sm:h-7">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">Code completion with instant preview</p>
                  </li>
                </ul>
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-6 text-base sm:text-lg font-bold leading-6 sm:leading-7">
                <p>Want to dig deeper into Tailwind?</p>
                <p>
                  <a
                    href="https://tailwindcss.com/docs"
                    className="text-cyan-600 hover:text-cyan-700"
                  >
                    {' '}
                    Read the docs &rarr;{' '}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
