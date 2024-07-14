import { useEffect, useState } from "react";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

function FetchUser() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
  }, []);

  return (
    <div>
      <p>nombre: {user?.name}</p>
      <p>user name: {user?.username}</p>
      <p>email: {user?.email}</p>
      <p>address: {`${user?.address.city} / ${user?.address.street} `}</p>
      <p>phone: {user?.phone}</p>
      <p>website: {user?.website}</p>
      <p>company: {`${user?.company.name} / ${user?.company.catchPhrase}`}</p>
    </div>
  );
}

export default FetchUser;
