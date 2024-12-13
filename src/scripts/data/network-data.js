const BASE_URL = 'https://restaurant-api.dicoding.dev';

async function restaurantList() {
  try {
    const response = await fetch(`${BASE_URL}/list`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (!data.error) {
      return data.restaurants;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

async function restaurantDetail(id) {
  const url = `${BASE_URL}/detail/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error('Error fetching restaurant detail');
    }

    return data.restaurant;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

async function addRestaurantReview(id, name, review) {
  try {
    const response = await fetch(`${BASE_URL}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        name,
        review,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (!data.error) {
      console.log('Review berhasil ditambahkan:', data.message);
      return data.customerReviews;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export { restaurantList, restaurantDetail, addRestaurantReview };
