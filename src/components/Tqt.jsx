import useTypewriter from 'react-typewriter-hook';

export default function Tqtmec(name) {
  const tqt = 'avec';
  const tqtText = useTypewriter(tqt);

  return (
    <div>
      <p>
        {name}
        {tqtText}
      </p>
    </div>
  );
}
