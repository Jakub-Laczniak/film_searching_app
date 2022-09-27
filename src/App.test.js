import { getFilm } from './App'

describe("searching film app testing", () => {
  it("should provide data about Breaking Bad after type in 'breaking'", () => {
    return getFilm("breaking")
      .then(response => expect(response.data.name).toBe("Breaking Bad"));
  });
});
