defmodule ServerWeb.PackageController do
  use ServerWeb, :controller

  def index(conn, %{"path" => path}) do
    conn
    |> put_resp_header("content-type", "application/javascript; charset=utf-8")
    |> Plug.Conn.send_file(200, "/mapp/packages/" <> Enum.join(path, "/"))
    |> halt()
  end

end
