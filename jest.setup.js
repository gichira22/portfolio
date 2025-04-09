// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Mock IntersectionObserver
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {
    // Trigger the callback with some mock entries
    this.callback([{
      isIntersecting: true,
      target: null,
      intersectionRatio: 1,
    }]);
    return this;
  }

  unobserve() {
    return this;
  }

  disconnect() {
    return this;
  }
}

global.IntersectionObserver = MockIntersectionObserver;
