export default function About() {
  const cards = [
    {
      event: "Pionir Gadjah Mada",
      role: "Co-Fasilitator Subcoordinator",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque turpis non lorem maximus, vitae posuere neque faucibus. Proin et dapibus urna. Ut ullamcorper ante quis ex malesuada, non vestibulum ex accumsan.",
      imageSrcs: [
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://www.minimaldesksetups.com/wp-content/uploads/2020/09/3-2-1024x819.jpg",
        "https://contents.lspr.ac.id/2023/07/event-organizer.jpg",
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-xl text-gray-500">
            Here are some of my experiences and background.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {cards.map((card, index) => (
              <div key={index} className="w-full md:w-auto">
                {/* Card content */}
              </div>
            ))}
          </div>

          <div>
            <a href="/" className="text-lg text-teal-500 hover:text-teal-600">
              Go back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
