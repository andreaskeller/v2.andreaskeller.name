const labels = {
  en: {
    work: "Work",
    year: "Year",
    technology: "Technology",
    website: "Website"
  },
  de: {
    work: "Arbeit",
    year: "Jahr",
    technology: "Technologie",
    website: "Webseite"
  },
}

export default function CaseStudyDashboard({
  lang = "en",
  work,
  technology,
  year,
  websiteTitle,
  websiteUrl,
}) {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <div className="text-sm text-gray-600 leading-4">{labels[lang].work}</div>
          <div className="leading-4 mr-2">{work}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600 leading-4 text-right">{labels[lang].year}</div>
          <div className="leading-4 text-right ml-2">{year}</div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <div className="text-sm text-gray-600 leading-4">{labels[lang].technology}</div>
          <div className="leading-4 mr-2">{technology}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600 leading-4 text-right">{labels[lang].website}</div>
          <div className="leading-4 text-right ml-2">
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
              {websiteTitle}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}