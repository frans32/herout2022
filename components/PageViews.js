import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PageViews(props) {
  let url = `https://stats.herout.co.za/api/stats/herout.co.za/pages?filters=%7B%22page%22%3A%22%2Fartikel%2F${encodeURI(
    props.page
  )}%22%7D&detailed=true`;
  const { data, error } = useSWR(url, fetcher);

  if (error) return <span></span>;
  if (data && typeof data[0]?.pageviews != "number") return <span></span>;

  if (!data) return <span>- lesers</span>;

  return (
    <span
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {data[0].pageviews} {data[0].pageviews == 1 ? "leser" : "lesers"}
    </span>
  );
}
