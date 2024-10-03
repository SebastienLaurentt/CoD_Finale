/**
 * Animates a hurt state by toggling it on and off for a specified number of cycles.
 * This function can be used for different characters or elements in the game.
 *
 * @param setHurtState - The state setter function for the hurt state
 * @param cycles - The number of on/off cycles for the hurt animation (default: 3)
 * @param interval - The time interval in milliseconds between each state change (default: 100ms)
 *
 * The animation works as follows:
 * 1. It sets the hurt state to true (visible)
 * 2. After the specified interval, it sets it to false (hidden)
 * 3. This process repeats for the specified number of cycles
 * 4. The animation ends with the hurt state set to false
 */
export const animateHurt = (
  setHurtState: React.Dispatch<React.SetStateAction<boolean>>,
  cycles = 3,
  interval = 100
) => {
  let count = 0;
  const maxCount = cycles * 2;

  const toggleHurt = () => {
    if (count >= maxCount) {
      setHurtState(false);
      return;
    }

    setHurtState(count % 2 === 0);
    count++;

    setTimeout(toggleHurt, interval);
  };

  toggleHurt();
};