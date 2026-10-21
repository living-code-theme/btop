// This port owns its application mappings. Inputs come only from the pinned local palette.


const btop = {
files: (f) => {
    const t = {
      main_bg: f.r("bg"), main_fg: f.r("fg"), title: f.r("fg"), hi_fg: f.r("accent"),
      selected_bg: f.c("surface1"), selected_fg: f.r("fg"), inactive_fg: f.r("lineNumber"),
      graph_text: f.r("fgMuted"), meter_bg: f.c("surface1"), proc_misc: f.c("mint"),
      cpu_box: f.r("accent"), mem_box: f.c("orchid"), net_box: f.c("steel"), proc_box: f.c("amber"),
      div_line: f.r("border"),
      temp_start: f.c("moss"), temp_mid: f.c("amber"), temp_end: f.c("flare"),
      cpu_start: f.c("teal"), cpu_mid: f.c("amber"), cpu_end: f.c("flare"),
      free_start: f.c("moss"), free_mid: f.c("moss"), free_end: f.c("mint"),
      cached_start: f.c("steel"), cached_mid: f.c("steel"), cached_end: f.c("aqua"),
      available_start: f.c("amber"), available_mid: f.c("amber"), available_end: f.c("copper"),
      used_start: f.c("orchid"), used_mid: f.c("orchid"), used_end: f.c("flare"),
      download_start: f.c("teal"), download_mid: f.c("mint"), download_end: f.c("aqua"),
      upload_start: f.c("copper"), upload_mid: f.c("amber"), upload_end: f.c("flare"),
      process_start: f.c("teal"), process_mid: f.c("amber"), process_end: f.c("flare"),
    };
    return [{
      path: `${f.slug}.theme`,
      content: `${Object.entries(t).map(([k, v]) => `theme[${k}]="${v}"`).join("\n")}\n`,
    }];
  }
};

export function generate(flavors) {
  return [...flavors.flatMap(f => btop.files(f)), ...(btop.all?.(flavors) ?? [])].filter(f => !["LICENSE", "README.md", "package.json", "extension.toml"].includes(f.path.split("/").at(-1)));
}
