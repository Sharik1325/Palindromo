import { render, screen } from '@testing-library/react';
import App from './App';
import {isPalindrome} from "./model/palindromo";

test('render app no problem', () => {
  render(<App />);
});

test('test word: ana', () => {
  const palabra = 'ana';
  expect(isPalindrome(palabra)).toBe(true);
});

test('test word: rotator', () => {
  const palabra = 'rotator';
  expect(isPalindrome(palabra)).toBe(true);
});

test('test word: reconocer', () => {
  const palabra = 'reconocer';
  expect(isPalindrome(palabra)).toBe(true);
});

test('test word: connect', () => {
  const palabra = 'connect';
  expect(isPalindrome(palabra)).toBe(false);
});
test('test word: carro', () => {
  const palabra = 'carro';
  expect(isPalindrome(palabra)).toBe(false);
});
