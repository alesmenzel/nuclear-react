import { atom } from '@alesmenzel/nuclear-core';
import { render, fireEvent, screen } from '@testing-library/react';
import { useAtom } from './hooks';
import '@testing-library/jest-dom';

describe('hooks', () => {
  it('useAtom() - read from the atom', () => {
    function Component() {
      const [, , countAtom] = useAtom(atom(100));

      return (
        <div>
          <div data-testid="value">{countAtom.value}</div>
          <button type="button" onClick={() => countAtom.set((count) => count + 1)}>
            Click me
          </button>
        </div>
      );
    }
    render(<Component />);

    expect(screen.getByTestId('value')).toHaveTextContent('100');
    fireEvent.click(screen.getByText('Click me'));
    expect(screen.getByTestId('value')).toHaveTextContent('101');
    fireEvent.click(screen.getByText('Click me'));
    expect(screen.getByTestId('value')).toHaveTextContent('102');
  });

  it('useAtom() - read from the getter and update through setter', () => {
    function Component() {
      const [count, setCount] = useAtom(atom(100));

      return (
        <div>
          <div data-testid="value">{count}</div>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            Click me
          </button>
        </div>
      );
    }
    render(<Component />);

    expect(screen.getByTestId('value')).toHaveTextContent('100');
    fireEvent.click(screen.getByText('Click me'));
    expect(screen.getByTestId('value')).toHaveTextContent('101');
    fireEvent.click(screen.getByText('Click me'));
    expect(screen.getByTestId('value')).toHaveTextContent('102');
  });

  it('useAtom() - function', () => {
    function Component() {
      const [count, setCount] = useAtom(() => atom(100));

      return (
        <div>
          <div data-testid="value">{count}</div>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            Click me
          </button>
        </div>
      );
    }
    render(<Component />);

    expect(screen.getByTestId('value')).toHaveTextContent('100');
    fireEvent.click(screen.getByText('Click me'));
    expect(screen.getByTestId('value')).toHaveTextContent('101');
    fireEvent.click(screen.getByText('Click me'));
    expect(screen.getByTestId('value')).toHaveTextContent('102');
  });
});
