import { useState, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ChevronUp, ChevronDown, RotateCcw } from 'lucide-react';
import { Button, VStack, Text, Box } from '@chakra-ui/react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  const [springs, api] = useSpring(() => ({
    from: { background: 'hsl(200, 100%, 100%)' },
  }));

  const updateBackground = useCallback((newCount: number) => {
    const hue = Math.min(200 + newCount * 5, 360);
    const lightness = Math.max(100 - newCount * 2, 50);
    api.start({
      background: `hsl(${hue}, 100%, ${lightness}%)`,
      config: { tension: 200, friction: 20 },
    });
  }, [api]);

  const increment = () => {
    setCount(prev => {
      const newCount = prev + 1;
      updateBackground(newCount);
      return newCount;
    });
  };

  const decrement = () => {
    setCount(prev => {
      const newCount = prev - 1;
      updateBackground(newCount);
      return newCount;
    });
  };

  const reset = () => {
    setCount(0);
    api.start({
      background: 'hsl(200, 100%, 100%)',
    });
  };

  return (
    <animated.div style={{ ...springs, padding: '2rem', borderRadius: '1rem' }}>
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">{count}</Text>
        <Box display="flex" gap={4}>
          <Button
            colorScheme="blue"
            onClick={increment}
            leftIcon={<ChevronUp />}
          >
            Increment
          </Button>
          <Button
            colorScheme="red"
            onClick={reset}
            leftIcon={<RotateCcw />}
          >
            Reset
          </Button>
          <Button
            colorScheme="blue"
            onClick={decrement}
            leftIcon={<ChevronDown />}
          >
            Decrement
          </Button>
        </Box>
      </VStack>
    </animated.div>
  );
};

export default Counter;