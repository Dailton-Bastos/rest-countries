import '@testing-library/jest-dom'

jest.mock('react', () => {
  const testCache = (func) => func
  const originalModule = jest.requireActual('react')
  return {
    ...originalModule,
    cache: testCache,
  }
})

jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
  }
})
