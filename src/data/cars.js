export const cars = [
  {
    slug: 'suzuki-ignis-gold-paq-852',
    brand: 'Suzuki',
    model: 'Ignis',
    year: 2016,
    color: 'Gold',
    plate: 'PAQ 852',
    available: true,
    pricePerDay: 45,
    photos: {
      front: '/nissan_cube_z12_defrente.jpg',
      rear: '/nissan_cube_z12_detras.jpg',
      side: '/nissan_cube_z12_delado.jpg',
      back: '/nissan_cube_z12_detras.jpg',
    },
    description:
      'Well-maintained Suzuki Ignis 2016 in elegant Gold. Perfect for city driving with great fuel economy and compact design.',
    specs: {
      engine: '1.2L 4-cylinder',
      transmission: 'Manual',
      fuel: 'Gasoline',
      seats: 5,
      doors: 5,
      mileage: '45,000 km',
    },
  },
  {
    slug: 'suzuki-ignis-red-py-807',
    brand: 'Suzuki',
    model: 'Ignis',
    year: 2016,
    color: 'Red',
    plate: 'PY 807',
    available: true,
    pricePerDay: 45,
    photos: {
      front: '/red_suzuki_ignis_defrente.jpg',
      rear: '/red_suzuki_ignis_detras.jpg',
      side: '/red_suzuki_ignis_delado.jpg',
      back: '/red_suzuki_ignis_detras.jpg',
    },
    description:
      'Vibrant Red Suzuki Ignis 2016. A stylish and reliable compact car, ideal for navigating the city with ease.',
    specs: {
      engine: '1.2L 4-cylinder',
      transmission: 'Manual',
      fuel: 'Gasoline',
      seats: 5,
      doors: 5,
      mileage: '42,000 km',
    },
  },
  {
    slug: 'suzuki-ignis-white-paq-855',
    brand: 'Suzuki',
    model: 'Ignis',
    year: 2016,
    color: 'White',
    plate: 'PAQ 855',
    available: true,
    pricePerDay: 45,
    photos: {
      front: '/white_suziki_ignis_defrente.jpg',
      rear: '/white_suziki_ignis_detras.jpg',
      side: '/white_suziki_ignis_delado.jpg',
      back: '/white_suziki_ignis_detras.jpg',
    },
    description:
      'Crisp White Suzuki Ignis 2016. Clean, practical, and efficient — the ideal daily driver for any journey.',
    specs: {
      engine: '1.2L 4-cylinder',
      transmission: 'Manual',
      fuel: 'Gasoline',
      seats: 5,
      doors: 5,
      mileage: '38,000 km',
    },
  },
  {
    slug: 'suzuki-ignis-gold-paq-853',
    brand: 'Suzuki',
    model: 'Ignis',
    year: 2016,
    color: 'Gold',
    plate: 'PAQ 853',
    available: true,
    pricePerDay: 45,
    photos: {
      front: '/nissan_cube_z12_defrente.jpg',
      rear: '/nissan_cube_z12_detras.jpg',
      side: '/nissan_cube_z12_delado.jpg',
      back: '/nissan_cube_z12_detras.jpg',
    },
    description:
      'Another elegant Gold Suzuki Ignis 2016. Reliable, fuel-efficient, and ready to take you wherever you need to go.',
    specs: {
      engine: '1.2L 4-cylinder',
      transmission: 'Manual',
      fuel: 'Gasoline',
      seats: 5,
      doors: 5,
      mileage: '50,000 km',
    },
  },
  {
    slug: 'suzuki-ignis-turquoise-py-808',
    brand: 'Suzuki',
    model: 'Ignis',
    year: 2016,
    color: 'Turquoise',
    plate: 'PY 808',
    available: true,
    pricePerDay: 45,
    photos: {
      front: '/turquoise_suzuki_iggnis_defrente.jpg',
      rear: '/turquoise_suzuki_iggnis_detras.jpg',
      side: '/turquoise_suzuki_iggnis_delado.jpg',
      back: '/turquoise_suzuki_iggnis_detras.jpg',
    },
    description:
      'Eye-catching Turquoise Suzuki Ignis 2016. Stand out on the road with this unique color while enjoying reliable performance.',
    specs: {
      engine: '1.2L 4-cylinder',
      transmission: 'Manual',
      fuel: 'Gasoline',
      seats: 5,
      doors: 5,
      mileage: '36,000 km',
    },
  },
  {
    slug: 'nissan-cube-brown-pr-945',
    brand: 'Nissan',
    model: 'Cube',
    year: 2016,
    color: 'Brown',
    plate: 'PR 945',
    available: false,
    pricePerDay: 50,
    photos: {
      front: '/nissan_cube_z12_defrente.jpg',
      rear: '/nissan_cube_z12_detras.jpg',
      side: '/nissan_cube_z12_delado.jpg',
      back: '/nissan_cube_z12_detras.jpg',
    },
    description:
      'Spacious and quirky Nissan Cube in Brown. Currently on long-term rental — check back soon for availability.',
    specs: {
      engine: '1.5L 4-cylinder',
      transmission: 'Automatic',
      fuel: 'Gasoline',
      seats: 5,
      doors: 5,
      mileage: '65,000 km',
    },
  },
]

export function getCarBySlug(slug) {
  return cars.find((car) => car.slug === slug)
}

export function getCarsByBrand(brand) {
  return cars.filter((car) => car.brand === brand)
}

export const brands = [...new Set(cars.map((car) => car.brand))]
