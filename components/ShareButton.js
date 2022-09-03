export default function ShareButton({ title }) {
  if ("share" in navigator)
    return (
      <img
        src="/assets/share.svg"
        alt="Deel"
        title="Deel artikel"
        onClick={async () => {
          try {
            await navigator.share({
              text: "Die Herout: " + title,
              url: window.location.href,
            });
          } catch {}
        }}
      />
    );
  else return <></>;
}
