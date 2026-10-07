from pathlib import Path
import json, shutil, subprocess
from PIL import Image

site=Path(__file__).resolve().parents[1]
root=site.parent/'Proyectos'
public=site/'public/projects'
ffmpeg=Path('C:/Program Files/SteelSeries/GG/apps/moments/ffmpeg.exe')
items=[]
author={'initials':'MH','name':'Marta Haro'}

def project(slug,title,subtitle,description,tags,folder):
    item=dict(id=7+len(items),title=title,subtitle=subtitle,description=description,tags=tags,authors=[author],images=[],videos=[])
    items.append(item)
    dest=public/slug; dest.mkdir(parents=True,exist_ok=True)
    return item, root/folder, dest

def picture(item,source,dest,label):
    name=f'image-{len(item["images"])+1}.webp'
    with Image.open(source) as im:
        im.thumbnail((1600,1600)); im.save(dest/name,'WEBP',quality=88)
    url=f'/projects/{dest.name}/{name}'
    item['images'].append(dict(src=url,alt=label))
    return url

def video(item,source,dest,label):
    name=f'video-{len(item["videos"])+1}.mp4'
    output=dest/name
    if source.suffix.lower()=='.mp4': shutil.copyfile(source,output)
    else:
        subprocess.run([str(ffmpeg),'-v','error','-y','-i',str(source),'-map','0:v:0','-map','0:a?','-c','copy','-movflags','+faststart',str(output)],check=True)
    poster=dest/f'poster-{len(item["videos"])+1}.png'
    subprocess.run([str(ffmpeg),'-v','error','-y','-ss','0.5','-i',str(output),'-frames:v','1',str(poster)],check=True)
    item['videos'].append(dict(src=f'/projects/{dest.name}/{name}',title=label,poster=f'/projects/{dest.name}/{poster.name}'))

i,s,d=project('diorama-modelos','Diorama · Modelos y objetos','Práctica de modelado 3D','Colección de modelos creados para un diorama: un conejo, un perro, un murciélago, una bola de cristal y una cuerda.',['3ds Max','Modelado 3D'], 'Animacion/Diorama_Marta_Haro')
i,s,d=project('diorama','Diorama · Escena en equipo','Composición de una escena 3D','Diorama realizado en equipo, presentado mediante cuatro renders de la escena.',['3ds Max','Diorama','Render'], 'Animacion/Diorama_Marta-Haro-Julia-Salom_Marta-Garcia')
i['authors']=[author,{'initials':'JS','name':'Júlia Salom'},{'initials':'MG','name':'Marta García'}]
for n,f in enumerate(sorted(s.glob('Render*')),1): picture(i,f,d,f'Render del diorama {n}')
i,s,d=project('froslass','Froslass · Modelo y pose','Pokémon fan art','Modelo 3D de Froslass con materiales y una pose de presentación. Incluye renders del personaje.',['3ds Max','Modelado 3D','Poses','Fan art'], 'Animacion/Frosslass')
i['models']=[{'label':'Modelo','id':'e9bd8342be50404eb139c9caa3543a33','url':'https://sketchfab.com/3d-models/froslass-pokemon-fan-model-e9bd8342be50404eb139c9caa3543a33'},{'label':'Pose 1','id':'3c3639535c844151aa2beabb2c5309e5','url':'https://sketchfab.com/3d-models/froslass-pokemon-fan-model-pose-1-3c3639535c844151aa2beabb2c5309e5'}]
for f,label in [('Render1.png','Render de Froslass'),('Post1.png','Presentación de Froslass')]: picture(i,s/f,d,label)
i,s,d=project('kirlia','Kirlia · Modelo y tres poses','Pokémon fan art','Modelo 3D de Kirlia presentado en tres poses, con texturas y renders del personaje.',['3ds Max','Modelado 3D','Texturas','Poses','Fan art'], 'Animacion/Kirlia')
for n in range(1,4): picture(i,s/f'marta.haro_Kirlia_shot{n}.jpg',d,f'Kirlia · Pose {n}')
i,s,d=project('klefki','Klefki · Modelo y pose','Pokémon fan art','Modelo 3D de Klefki y una pose de presentación, con materiales y renders.',['3ds Max','Modelado 3D','Texturas','Poses','Fan art'], 'Animacion/Klefki')
picture(i,s/'Klefki.png',d,'Render de Klefki')
i,s,d=project('lego','LEGO Yoriichi · Modelo y tres poses','Personaje 3D','Modelo 3D de LEGO Yoriichi con texturas y tres poses, presentado en renders del distrito rojo, el bosque de glicinas y un atardecer.',['3ds Max','Modelado 3D','Texturas','Poses'], 'Animacion/LEGO - copia')
for f,label in [('Lego_RedLightDistrict.jpg','LEGO Yoriichi · Pose 1'),('LEGO_Wisteria.jpg','LEGO Yoriichi · Pose 2'),('world_sunset_beauty_sunrise_one_nikon_war_calm-479345.jpg','LEGO Yoriichi · Pose 3')]: picture(i,s/f,d,label)
i,s,d=project('flexo','Flexo · Animación','Práctica AC2','Dos ejercicios de animación de un flexo: una secuencia individual y otra con una tetera.',['3ds Max','Animación 3D'], 'Animacion Personajes/AC2_martaharo/AC2_martaharo')
i['description']='Dos ejercicios de animación de Flexo: una amistad extraña con Tetera y una escena con Bolet, dos fans de Pixar.'
i['headerIcon']='lamp-2'
i['tags']=['3ds Max','Substance Painter','Iluminación','Rigging','Animación 3D']
i['videoLinks']=[{'title':'Flexo y Tetera — Una amistad extraña','url':'https://youtu.be/40DOPXX9DNo'},{'title':'Flexo y Bolet — Dos fans de Pixar','url':'https://youtu.be/NnX7SYbQUSM'}]
for f,label in [('flexo_martaharo.mov','Animación del flexo'),('flexo_tetera_martaharo.mov','Flexo y tetera')]: video(i,s/f,d,label)
i,s,d=project('rebotes','Ejercicios de rebote','Práctica EX1','Ejercicios de animación de un bote vertical, un bote hacia delante y un bote con una tetera.',['3ds Max','Animación 3D'], 'Animacion Personajes/EX_1_MartaHaro/EX_1_MartaHaro')
i,s,d=project('fry','Fry · Animación y renders','Examen de animación · Enero 2026','Ejercicio de animación con Fry, acompañado de renders de distintas poses y una presentación con Slurm.',['3ds Max','Animación 3D','Render','Fan art'], 'Animacion Personajes/Marta_Haro_Examen25-01-26/Marta_Haro_Examen25-01-26')
i['notice']='Ninguno de los modelos de esta escena es de mi autoría. Mi trabajo en este proyecto es la animación, el rigging y la iluminación.'
i['videoLinks']=[{'title':'Fry y el Slurm de la suerte — Animación 3D','url':'https://youtu.be/nNulPmTz4DE'}]
i['emoji']='🥫'
for n,f in enumerate(sorted(s.glob('Fry_Render*.jpg')),1): picture(i,f,d,f'Fry · Render {n}')
video(i,s/'Animació_Video_Marta_Haro.mov',d,'Animación de Fry')
i,s,d=project('toon','Toon Link · Poses y animación','Práctica de animación de personajes','Personaje Toon Link presentado en cinco poses y varias secuencias de animación, incluida una acción de diez segundos.',['3ds Max','Animación 3D','Poses'], 'Animacion Personajes/Pràctica_Animació_Marta-Haro/Pràctica_Animació_Marta-Haro/Videos-Renders')
i['headerImage']='/projects/toon/triforce.svg'
i['videoLinks']=[{'title':'Toon Link — Test de rigging: caminata y expresiones','url':'https://youtu.be/SoxLSrvgafY'},{'title':'Toon Link — Animación en reposo (Idle)','url':'https://youtu.be/QdMt_urwCRY'}]+[{'title':f'Toon Link — {action}','url':None} for action in ['Tocando la Batuta de los Vientos','Sacando la Espada Maestra','Ataque','Salto']]
i['tags']=['3ds Max','Iluminación','Substance Painter','Modelado 3D','Animación 3D','Poses','Fan art','Render']
i['videoLinks'][2]['url']='https://youtu.be/nfdc_cB4ER4'
i['videoLinks'][3]['url']='https://youtu.be/Vr7IiCcleh8'
i['videoLinks'][4]['url']='https://youtu.be/mQrzmUemwRc'
i['videoLinks'][5]['url']='https://youtu.be/YxfZkWX-xe0'
for n in range(1,6): picture(i,s/f'Presentation_Render_{n}.jpg',d,f'Toon Link · Pose {n}')
video(i,s/'Action_10sec_Video.mov',d,'Toon · Secuencia de diez segundos')
for n in range(1,6): video(i,s/f'Action_{n}_VideoSound.mov',d,f'Toon · Acción {n}')
i,s,d=project('max-cat','Max y los tentáculos · Rigging CAT','Práctica de rigging y animación','Práctica de rigging con CAT y animación de Max y los tentáculos, con renders y dos vídeos de las escenas.',['3ds Max','CAT','Rigging','Animación 3D'], 'Animacion Personajes/Rigging-CAT-3_marta-haro/Rigging-CAT-3_marta-haro')
i['emoji']='🐰'
i['tags']=['3ds Max','CAT','Rigging','Substance Painter','Iluminación','Animación 3D']
i['videoLinks']=[{'title':'Max y los tentáculos — Un caradura contra el plan maligno','url':'https://youtu.be/QTerSIreQIA'},{'title':'Max — Pruebas de rigging, movimiento y expresiones','url':'https://youtu.be/itFDh8lnXZk'}]
for n in range(1,3): picture(i,s/f'MAX_render_{n}_marta.haro.jpg',d,f'Max · Render {n}')
for f,label in [('MAX_on-action_marta-haro.mov','Max en acción'),('MAX-Tentacles_marta-haro.mov','Max y los tentáculos')]: video(i,s/f,d,label)
i,s,d=project('gameboy','Game Boy','Práctica de arte para videojuegos','Modelo 3D de una Game Boy con UV y mapas de albedo, normales, oclusión, emisión y acabado metálico.',['3ds Max','Substance Painter','Modelado 3D','UV','Texturas PBR'], 'Arte Videojuegos/Art_1_MartaHaro')
i['emoji']='🎮'
i['models']=[{'label':'Modelo','id':'929934c4364440d198d77727828bc466','url':'https://skfb.ly/pOG9p'}]
i,s,d=project('materiales','Materiales de suelo y techo','Práctica de arte para videojuegos','Dos proyectos de materiales para un suelo de clase y un techo, creados en archivos de Substance Designer.',['Substance Designer','Materiales','Texturas'], 'Arte Videojuegos/Art_2_MartaHaro')
i,s,d=project('enchanted-village','Aldea Vikinga Encantada','Escenario en Unity','Escenario nocturno de un pueblo rodeado de montañas, con cristales luminosos y luciérnagas. La demo permite explorar libremente el entorno.',['Unity','Partículas','Iluminación','Diseño de nivel'], 'Arte Videojuegos/Itch_Preparacion')
picture(i,s/'Art3_Captura.png',d,'Vista del pueblo y sus cristales luminosos')
i['notice']='Proyecto centrado en el diseño de nivel. Los cristales, las partículas, las nubes y la niebla ambiental son de mi autoría; el resto de los assets procede del paquete RPGPP_LT.'
i['emoji']='🏠'
shutil.copytree(s/'Art3/BuildWebGL',d/'demo',dirs_exist_ok=True); i['demoUrl']=f'/projects/{d.name}/demo/index.html'
i,s,d=project('stylized-explosion','Explosión estilizada','Efecto visual en Unity','Demo de una explosión estilizada con partículas, shaders y animación. Presentada con una cámara cercana y un fondo gris azulado.',['Unity','VFX','Shaders','Partículas'], 'Arte Videojuegos/Itch_Preparacion')
i['emoji']='💥'
picture(i,s/'Art4_Captura.png',d,'Explosión estilizada · Detalle del efecto')
video(i,s/'Art4_Video.mp4',d,'Explosión estilizada · Tres repeticiones')
shutil.copytree(s/'Art4/BuildWebGL',d/'demo',dirs_exist_ok=True); i['demoUrl']=f'/projects/{d.name}/demo/index.html'

metadata={
    7: ('Práctica · Animación 3D','Mayo 2024'),
    8: ('Práctica en equipo · Animación 3D','Mayo 2024'),
    9: ('Práctica · Animación 3D','Junio 2024'),
    10: ('Práctica · Animación 3D','Marzo 2024'),
    11: ('Práctica · Animación 3D','Junio 2024'),
    12: ('Práctica · Animación 3D','2023'),
    13: ('Práctica AC2 · Animación de personajes','Octubre 2025'),
    14: ('Ejercicio EX1 · Animación de rebotes','Septiembre 2025'),
    15: ('Examen · Animación de personajes','Enero 2026'),
    16: ('Práctica · Animación de personajes','Diciembre 2025'),
    17: ('Práctica · Animación de personajes','Noviembre 2025'),
    18: ('Práctica 1 · Arte para videojuegos','Noviembre 2024'),
    19: ('Práctica 2 · Arte para videojuegos','Diciembre 2024'),
    20: ('Práctica 3 · Arte para videojuegos','Marzo 2025'),
    21: ('Práctica 4 · Arte para videojuegos','Mayo 2025'),
}
for item in items:
    item['subtitle'],item['date']=metadata[item['id']]
    if item['id']==11:
        item['models']=[dict(label='Pose', id='712c5cc1075b49f0812eed49b29773fe', url='https://skfb.ly/pOGwC')]
    if item['id']==17:
        item['notice']='Los modelos base de Max y los tentáculos no son de mi autoría. La ropa y la herramienta sí son creación propia, junto con el trabajo de rigging, animación e iluminación.'
    if item['id']==20:
        item['itchUrl']='https://glauja.itch.io/enchanted-viking-village'
    if item['id']==21:
        item['itchUrl']='https://glauja.itch.io/stylized-explosion'
        item['videoUrl']='https://youtu.be/YO5WhQsDzhM'
    if item['title'].startswith('Kirlia'):
        entries=[
            ('Modelo','kirlia-pokemon-fan-model','5905b19af6584713906b4ce88c5345d0'),
            ('Pose 1','kirlia-pokemon-fan-model-pose-1','f742c7031a63434498ef49b59e1b549a'),
            ('Pose 2','kirlia-pokemon-fan-model-pose-2','e6167533c024441a8d14e6b7f6a09482'),
            ('Pose 3','kirlia-pokemon-fan-model-pose-3','47a17bbf988a4354bf916237024c9c22'),
        ]
        item['models']=[dict(label=label,id=uid,url=f'https://sketchfab.com/3d-models/{slug}-{uid}') for label,slug,uid in entries]
for item in items:
    image_paths = [image['src'] for image in item.get('images', [])]
    image_paths += [video['poster'] for video in item.get('videos', []) if video.get('poster')]
    if item.get('headerImage'):
        image_paths.append(item['headerImage'])
    for image_path in image_paths:
        if not image_path.startswith('/projects/'):
            continue
        source = site/'public'/image_path.lstrip('/')
        destination = site/'src/assets'/image_path.lstrip('/')
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, destination)
(site/'src/data/additionalProjectItems.js').write_text("import { resolveProjectImages } from './projectAssets.js'\n\nexport const additionalProjectItems = "+json.dumps(items,ensure_ascii=False,indent=2)+'\n.map(resolveProjectImages)\n',encoding='utf-8')
print(f'{len(items)} proyectos añadidos; {sum(len(i["images"]) for i in items)} renders y {sum(len(i["videos"]) for i in items)} vídeos.')
