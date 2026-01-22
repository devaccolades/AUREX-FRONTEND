const BASE_URL = "https://backend.aurexbuilders.com";

// Create a reusable API utility function for fetching data
export const fetchData = async (endpoint) => {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    // ✅ VERY IMPORTANT: handle 404 silently
    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw to handle in the calling function
  }
};

// all api calls here

//general fetch
export const AboutUsFetch = async () => {
  return fetchData(`/general/aboutus`);
};
export const BlogsFetch = async () => {
  return fetchData(`/general/blogs`);
};
export const BlogsById = async (slug) => {
  return fetchData(`/general/blogs/${slug}/`);
};

export const FaqFetch = async () => {
  return fetchData(`/general/faq`);
};

export const SeoFetch = async () => {
  return fetchData(`/general/seo`);
};
export const SeoById = async (name) => {
  return fetchData(`/general/seo/${name}/`);
};
export const TestmonialsFetch = async () => {
  return fetchData(`/general/testimonials`);
};
export const VidTestmonialsFetch = async () => {
  return fetchData(`/general/v-testimonials`);
};

//careers fetch

export const CareersFetch = async () => {
  return fetchData(`/careers/careers`);
};

export const CareersById = async (name) => {
  return fetchData(`/careers/careers/${name}/`);
};

export const CareersApply = async (formData) => {
  const url = `${BASE_URL}/careers/job-application/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData, // send FormData directly
    });

    if (!response.ok) {
      throw new Error(`Form submission failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};

//leads
export const LeadSubmission = async (formData) => {
  const url = `${BASE_URL}/leads/contact/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Form submission failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};

export const ProjectEnquiry = async (formData) => {
  const url = `${BASE_URL}/leads/project-enquiry/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Form submission failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};

// Amenities
export const ProjectsAmenitiesFetch = async () => {
  return fetchData(`/projects/amenities/`);
};

export const ProjectAmenitiesBySlugFetch = async (slug) => {
  return fetchData(`/projects/amenities/${slug}/`);
};

// Common Facilities
export const ProjectsCommonFacilitiesFetch = async () => {
  return fetchData(`/projects/common-facilities/`);
};

export const ProjectCommonFacilitiesBySlugFetch = async (slug) => {
  return fetchData(`/projects/common-facilities/${slug}/`);
};

// Floor Plans
export const ProjectsFloorPlansFetch = async () => {
  return fetchData(`/projects/floor-plans/`);
};

export const ProjectFloorPlansBySlugFetch = async (slug) => {
  return fetchData(`/projects/floor-plans/${slug}/`);
};

// Location Advantages
export const ProjectsLocationAdvantagesFetch = async () => {
  return fetchData(`/projects/location-advantages/`);
};

export const ProjectLocationAdvantagesBySlugFetch = async (slug) => {
  return fetchData(`/projects/location-advantages/${slug}/`);
};

// Project Updates
export const ProjectsUpdatesFetch = async () => {
  return fetchData(`/projects/project-updates/`);
};

export const ProjectUpdatesBySlugFetch = async (slug) => {
  return fetchData(`/projects/project-updates/${slug}/`);
};

// Projects (main)
export const ProjectsFetch = async () => {
  return fetchData(`/projects/projects/`);
};

export const ProjectBySlugFetch = async (slug) => {
  return fetchData(`/projects/projects/${slug}/`);
};

// Specifications
export const ProjectsSpecificationsFetch = async () => {
  return fetchData(`/projects/specifications/`);
};

export const ProjectSpecificationsBySlugFetch = async (slug) => {
  return fetchData(`/projects/specifications/${slug}/`);
};

// YouTube Videos
export const ProjectsYoutubeVideosFetch = async () => {
  return fetchData(`/projects/youtube-videos/`);
};

export const ProjectYoutubeVideosBySlugFetch = async (slug) => {
  return fetchData(`/projects/youtube-videos/${slug}/`);
};

export const SpaceGalleryFetch = async () => {
  return fetchData(`/gallery/space-gallery/`);
};

export const GalleryVideosFetch = async () => {
  return fetchData(`/gallery/gallery-videos/`);
};

export const EventsFetch = async () => {
  return fetchData(`/gallery/events/`);
};

export const EventGalleryFetch = async () => {
  return fetchData(`/gallery/event-gallery/`);
};

export const EventGalleryByEventIdFetch = async (eventId) => {
  return fetchData(`/event-gallery/${eventId}/`);
};
