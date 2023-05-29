defmodule RequestLogger.App do
    @me __MODULE__

    def start_link() do
        Agent.start_link(fn -> %{js: getJS(), css: getCSS()}  end, name: @me)
    end
    def getApp() do
        Agent.get(@me, & &1)
    end
    defp getJS() do
        "../../requestLogFrontend/dist/assets//index.js"
        |> Path.expand(__DIR__)
        |> File.read!
    end
    defp getCSS() do
        "../../requestLogFrontend/dist/assets/index.css"
        |> Path.expand(__DIR__)
        |> File.read!
    end
end
