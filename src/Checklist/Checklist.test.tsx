import { render, screen } from '@testing-library/react';
import { Checklist } from './Checklist';

test('should render correct list items when data specified', function () {
  render(
    <Checklist
      data={[{ id: 1, name: 'Lucy', role: 'Manager' }]}
      id='id'
      primary='name'
      secondary='role'
    />
  );
  expect(screen.getByText('Lucy')).toBeInTheDocument();
  expect(screen.getByText('Manager')).toBeInTheDocument();
});

test('should render correct list items when renderItem specified', function () {
  render(
    <Checklist
      data={[{ id: 1, name: 'Lucy', role: 'Manager' }]}
      id='id'
      primary='name'
      secondary='role'
      renderItem={function (item) {
        return (
          <li key={item.id}>
            {item.name} - {item.role}
          </li>
        );
      }}
    />
  );
  expect(screen.getByText('Lucy - Manager')).toBeInTheDocument();
});