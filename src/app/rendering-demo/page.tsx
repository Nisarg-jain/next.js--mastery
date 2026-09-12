import ImageSlider from "./image-slider";

export default function RenderingDemoPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Third-Party Packages in Server Components
        </h1>
        <p className="text-gray-600">
          The page remains a Server Component, while the slider runs safely in a wrapped client boundary.
        </p>
      </div>

      {/* The wrapped third-party component */}
      <ImageSlider />
    </div>
  );
}